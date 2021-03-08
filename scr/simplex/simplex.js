var rdy = 1;
var resMult = 1 / 5;

async function setup(c, ctx, w, h){
    ctx.fillStyle = "#000"

    window.smp1 = new SimplexNoise(Math.random())
    window.smp2 = new SimplexNoise(Math.random())
    window.smp3 = new SimplexNoise(Math.random())
    
}
async function draw(c, ctx, w, h){
    if(rdy){
        var d = ctx.getImageData(0,0,w,h)
        var f = d.data
        let z = performance.now() / 4000;
        for(i=0;i<f.length;i+=4){
            let x = ~~((i / 4) % w);
            let y = ~~((i / 4) / w);
            let r = f[i+0];
            let g = f[i+1];
            let b = f[i+2];
            let a = f[i+3];
            
            let sx = ~~(14);
            let sy = ~~(14);
            

            let ax = x / w * sx;
            let ay = y / w * sy;
            

            a = 255;
            r = smp1.noise3D(ax, ay, z) * 255;
            g = smp2.noise3D(ax, ay, z) * 255;
            b = smp3.noise3D(ax, ay, z) * 255;

            f[i+0] = r
            f[i+1] = g
            f[i+2] = b
            f[i+3] = a
        }
        ctx.putImageData(d, 0, 0)
    }
}
