import React, { useEffect } from 'react';

function Havadurumu() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://app2.weatherwidget.org/js/?id=ww_8ab5f15ca3e97';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <><div id="ww_8ab5f15ca3e97" v='1.3' loc='id' a='{"t":"ticker","lang":"tr","sl_lpl":1,"ids":["wl5912"],"font":"Arial","sl_ics":"one_a","sl_sot":"celsius","cl_bkg":"image","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722","el_nme":3}'>Daha fazla hava durumu tahmini: <a href="https://oneweather.org/tr/istanbul/15_days/" id="ww_8ab5f15ca3e97_u" target="_blank">15 gunluk hava durumu</a></div><script async src="https://app2.weatherwidget.org/js/?id=ww_8ab5f15ca3e97"></script></>
  );
}

export default Havadurumu;
