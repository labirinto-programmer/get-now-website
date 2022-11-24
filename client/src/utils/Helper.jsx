import React from 'react';

export const cutImgLink = allname => allname.split("/")[3].split(".")[0];

export const getImg = (ele, classStyle) => {
    return  <img className={classStyle} src={require(`../assets/image/${cutImgLink(ele)}.png`)} alt={require(`../assets/image/${cutImgLink(ele)}.png`)}/>
}