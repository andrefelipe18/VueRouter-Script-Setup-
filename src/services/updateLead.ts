import axios from 'axios';

export default async function updateLead(idLead: number, nome: string, telefone: string) {
    const response = await axios.put(`http://localhost:3000/leads/${idLead}`, {
        nome: nome,
        telefone: telefone,
    });
    return response.data;
}
