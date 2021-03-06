'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('packages', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.BIGINT
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING(50),
            },
            description: {
                allowNull: true,
                type: Sequelize.TEXT,
            },
            isPaid: {
                type: Sequelize.BOOLEAN,
                allowNull: false
            },
            rate: {
                type: Sequelize.DOUBLE(10, 2),
                allowNull: true
            },
            durationType: {
                type: Sequelize.STRING(50),
                allowNull: true,
            },
            duration: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            status: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            allowedTeam: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            allowedProjects: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            allowedMember: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            allowedStorage: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW
            }
        });
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('packages');
    }
};
