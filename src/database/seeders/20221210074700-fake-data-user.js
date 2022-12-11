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

    await queryInterface.bulkInsert('users', [
      {
        name: "Guest",
        email: "guest@vxr.com",
        password: "$2b$10$crWixh5yQ67qHFmmTfMN6OVf3JE.CVhHxQz7VF1RsMMQfNIhpjbd6",
        numberPhone: "0865346412",
        type: "Client",
        createdAt: "2022-11-11 01:01:01",
        updatedAt: "2022-11-11 01:01:01"
      },
      {
        name: "Guest 2",
        email: "guest2@vxr.com",
        password: "$2b$10$OKOa4PMsIDNm2RMTvQtMnul9zLKe0aOcyEvS6ju1r8fxSjeJHE8jC",
        numberPhone: "0865346413",
        type: "Client",
        createdAt: "2022-11-11 01:01:01",
        updatedAt: "2022-11-11 01:01:01"
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
    await queryInterface.bulkDelete('users', null, {});
  }
};
