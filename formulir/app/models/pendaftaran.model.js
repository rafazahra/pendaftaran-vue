module.exports = (sequelize, Sequelize) => {
    const Pendaftaran = sequelize.define("pendaftaran", {
      nama_murid: {
        type: Sequelize.STRING
      },
      jenis_kelamin: {
        type: Sequelize.STRING
      },
      ttl: {
        type: Sequelize.STRING
      },
      agama: {
        type: Sequelize.STRING
      },
      jumlah_saudara: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.STRING
      },
      no_telepon: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      },
    });
  
    return Pendaftaran;
  };