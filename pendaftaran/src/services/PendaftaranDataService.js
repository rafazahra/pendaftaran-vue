import http from "../http-common";

class PendaftaranDataService {
  getAll() {
    return http.get("/pendaftaran");
  }

  get(id) {
    return http.get(`/pendaftaran/${id}`);
  }

  create(data) {
    return http.post("/pendaftaran", data);
  }

  update(id, data) {
    return http.put(`/pendaftaran/${id}`, data);
  }

  delete(id) {
    return http.delete(`/pendaftaran/${id}`);
  }

  deleteAll() {
    return http.delete(`/pendaftaran`);
  }

  findByTitle(title) {
    return http.get(`/pendaftaran?title=${title}`);
  }
}

export default new PendaftaranDataService();
