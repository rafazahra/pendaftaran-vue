<template>
  <div v-if="currentTutorial" class="edit-form">
    <h4>Tutorial</h4>
    <form>
      <div class="form-group">
        <label for="nama_murid">Nama Murid</label>
        <input type="text" class="form-control" id="nama_murid"
          v-model="currentPendaftaran.nama_murid"
        />
      </div>

      <div class="form-group">
        <label for="jenis_kelamnin">Jenis Kelamnin</label>
        <input type="text" class="form-control" id="jenis_kelamin"
          v-model="currentPendaftaran.jenis_kelamin"
        />
      </div>

      <div class="form-group">
        <label for="ttl">Tempat Tanggal Lahir</label>
        <input type="text" class="form-control" id="ttl"
          v-model="currentPendaftaran.ttl"
        />
      </div>

      <div class="form-group">
        <label for="agama">Agama</label>
        <input type="text" class="form-control" id="agama"
          v-model="currentPendaftaran.agama"
        />
      </div>

      <div class="form-group">
        <label for="jumlah_saudara">Jumlah Saudara</label>
        <input type="text" class="form-control" id="jumlah_saudara"
          v-model="currentPendaftaran.jumlah_saudara"
        />
      </div>

      <div class="form-group">
        <label for="alamat">Alamat</label>
        <input type="text" class="form-control" id="alamat"
          v-model="currentPendaftaran.alamat"
        />
      </div>

      <div class="form-group">
        <label for="no_telepon">No Telepon</label>
        <input type="text" class="form-control" id="no_telepon"
          v-model="currentPendaftaran.no_telepon"
        />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" class="form-control" id="email"
          v-model="currentPendaftaran.email"
        />
      </div>

      <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ currentPendaftaran.published ? "Published" : "Pending" }}
      </div>
    </form>

    <button class="badge badge-primary mr-2"
      v-if="currentPendaftaran.published"
      @click="updatePublished(false)"
    >
      UnPublish
    </button>
    <button v-else class="badge badge-primary mr-2"
      @click="updatePublished(true)"
    >
      Publish
    </button>

    <button class="badge badge-danger mr-2"
      @click="deletePendaftaran"
    >
      Delete
    </button>

    <button type="submit" class="badge badge-success"
      @click="updatePendaftaran"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Pendaftaran...</p>
  </div>
</template>

<script>
import PendaftaranDataService from "../services/PendaftaranDataService";

export default {
  name: "pendaftaran-details",
  data() {
    return {
      currentPendaftaran: null,
      message: ''
    };
  },
  methods: {
    getPendaftaran(id) {
      PendaftaranDataService.get(id)
        .then(response => {
          this.currentPendaftaran = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updatePublished(status) {
      var data = {
        id: this.currentPendaftaran.id,
        nama_murid: this.currentPendaftaran.nama_murid,
        jenis_kelamin: this.currentPendaftaran.jenis_kelamin,
        ttl: this.currentPendaftaran.ttl,
        agama: this.currentPendaftaran.agama,
        jumlah_saudara: this.currentPendaftaran.jumlah_saudara,
        alamat: this.currentPendaftaran.alamat,
        no_telepon: this.currentPendaftaran.no_telepon,
        email: this.currentPendaftaran.email,
        published: status
      };

      PendaftaranDataService.update(this.currentPendaftaran.id, data)
        .then(response => {
          this.currentPendaftaran.published = status;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updatePendaftaran() {
      PendaftaranDataService.update(this.currentPendaftaran.id, this.currentPendaftaran)
        .then(response => {
          console.log(response.data);
          this.message = 'The tutorial was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deletePendaftaran() {
      PendaftaranDataService.delete(this.currentPendaftaran.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "pendaftarans" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getPendaftaran(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>