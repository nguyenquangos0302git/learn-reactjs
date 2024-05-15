import React from 'react';
import AblumList from './components/AblumList/index';

function AblumListFeature () {
  const listAblum = [
    {
      id: 1,
      name: 'Han Sana',
      thumbnail: 'https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/a/0/3/8/a03818a0ddf4bc8f6780d3091c9de93b.jpg',
    },
    {
      id: 2,
      name: 'Chan Seria',
      thumbnail: 'https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/9/5/e/a/95eaecf78d42ea465e8a85540ef472cf.jpg',
    },
    {
      id: 3,
      name: 'Semira',
      thumbnail: 'https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/f/7/c/b/f7cb308c99909774d41fca1441ebda89.jpg',
    },
  ]
  return (
    <div>
      <AblumList listAblum={listAblum}></AblumList>
    </div>
  )
}

export default AblumListFeature;