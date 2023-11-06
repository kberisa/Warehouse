import http from '../http-common';


class WarehouseService {
  async getAll() {
    return await http.get('/warehouse');
  }

  async getById(id) {
    return await http.get('/warehouse/' + id);
  }

  async delete(id) {
    const answer = await http.delete('/warehouse/' + id)
      .then(response => {
        return { ok: true, message: 'Successfully deleted' };
      })
      .catch(e => {
        return { ok: false, message: e.response.data };
      });

    return answer;
  }

  async post(item) {
    const answer = await http.post('/warehouse', item)
      .then(response => {
        return { ok: true, message: 'Item added' };
      })
      .catch(error => {
        console.log(error.response);
        return { ok: false, message: error.response.data };
      });

    return answer;
  }

  async put(id, item) {
    const answer = await http.put('/warehouse/' + id, item)
      .then(response => {
        return { ok: true, message: 'Item changed' };
      })
      .catch(error => {
        console.error(error.response);
        return { ok: false, message: error.response.data };
      });

    return answer;
  }
}

const warehouseService = new WarehouseService();
export default warehouseService;