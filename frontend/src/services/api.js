async function request(path,payload){let response;try{response=await fetch(`/api/${path}`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)})}catch{throw new Error('No se pudo conectar con el servidor.')}const body=await response.json().catch(()=>({}));if(!response.ok)throw new Error(body.error||'Ocurrió un error.');return body}
export const sendContact=payload=>request('contacts',payload);
export const sendAssessment=payload=>request('assessments',payload);
export async function getQuestions(){const response=await fetch('/api/questions');if(!response.ok)throw new Error('No se pudieron cargar las preguntas.');return response.json()}
