import * as style from '../lib/index.js';
import { createAvatar } from '@dicebear/core';
import * as fs from 'fs'; 
import * as path from 'path';
 

function HomePage({id,svg}) {
  return <div style={{width:300,margin:'0 auto'}}>
  {!!svg?<div dangerouslySetInnerHTML={{__html:svg}}></div>: "没有id"}
  </div>;
}

export async function getServerSideProps(context) {
  const id = context.query?.id || '';
  
  console.log('context.params',  context.query);
  if(!!id){

  const svgPath = path.resolve(__dirname, '../../../public/avatar', `${id}.svg`);

  if (false === fs.existsSync(svgPath)) {
    if (false === fs.existsSync(path.dirname(svgPath))) {
      fs.mkdirSync(path.dirname(svgPath), { recursive: true });
    }

    // fs.writeFileSync(svgPath, createAvatar(style, { seed: id }).toString());
  }
  console.log('context.params',  svgPath);
  }
  return {
    props: {
      svg:createAvatar(style, { seed: id }).toString()
    }, // will be passed to the page component as props
  };
}
export default HomePage;
