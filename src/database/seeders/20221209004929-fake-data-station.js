'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('stations', [
      {
      name: "Bến xe Bạc Liêu",
      address: "phường 5, Thành Phố Bạc Liêu",
      province: "Bạc Liêu",
      createdAt: "2022-11-11 01:01:01",
      updatedAt: "2022-11-11 01:01:01"
      },
      {
        name: 'Bến Xe Miền Đông Mới',
        address: 'Bình Thắng, Dĩ An, Bình Dương',
        province: 'Bình Dương',
        createdAt: '2022-12-03 15:02:19',
        updatedAt: '2022-12-03 15:02:19' 
      },
      {
        name: 'Bến Xe Miền Tây',
        address: '395 Kinh Đ. Vương, An Lạc, Bình Tân, Thành phố Hồ Chí Minh',
        province: 'Thành phố Hồ Chí Minh',
        createdAt: '2022-12-03 15:02:19',
        updatedAt: '2022-12-03 15:02:19' 
      },
      {
        name: 'Bến xe Sóc Trăng',
        address: 'Lê Văn Tám, Phường 3, Tp. Sóc Trăng, Sóc Trăng',
        province: 'Sóc Trăng',
        createdAt: '2022-12-03 15:02:19',
        updatedAt: '2022-12-03 15:02:19' 
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('stations', null, {});
  }
};
