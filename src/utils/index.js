const isMobile = ()=>{
    const result =  (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent));
    console.log('isMobile',result);
    return result;
}

export { isMobile }