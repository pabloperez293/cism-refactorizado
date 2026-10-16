import {appendFile,mkdir} from 'node:fs/promises';import path from 'node:path';
export async function appendRecord(filename,data){const dir=path.resolve(process.env.DATA_DIR||'./data');await mkdir(dir,{recursive:true,mode:0o700});await appendFile(path.join(dir,filename),JSON.stringify({...data,createdAt:new Date().toISOString()})+'\n',{mode:0o600})}
