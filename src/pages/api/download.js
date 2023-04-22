const ytdl = require('ytdl-core');
const contentDisposition = require('content-disposition');

export default async (req, res) => {
    const {url, vname, itag, format} = req.body;
    // res.json({...req.query, ct: contentDisposition(`${vname}.${format}`)});
    res.writeHead(200, {
        'Content-Disposition': `${contentDisposition(`${vname}.${format}`)}`,
        'Content-Transfer-Encoding': 'binary',
        'Content-Type': 'application/octet-stream'
    });
    await ytdl(url, {itag, filter: "audioandvideo", quality:"highest"}).pipe(res);
}