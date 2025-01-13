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
   

  return {
    props: {
      svg:!!id?createAvatar(style, { seed: id }).toString():''
    }, // will be passed to the page component as props
  };
}
export default HomePage;
