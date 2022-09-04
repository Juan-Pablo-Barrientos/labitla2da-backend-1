const Model = require("../../models");

const showsRepository = {
  getShows: async () => {
    let shows = Model.Shows.findAll();
    return shows;
  },

  getShow: async (id) => {
    let show = await Model.Shows.findOne({ where: { id } });
    return show;
  },

  createShow: async (show) => {
    let showCreated = await Model.Shows.create(show);
    return showCreated;
  },

  editShow: async (show, id) => {
    let showEdited = await Model.Shows.findOne(id);
    if (showEdited) return Model.Shows.update(show, { where: { id } });
  },

  delShow: async (id) => {
      let delShow = await Model.Shows.destroy({ where: { id } });
      return delShow;
  },
};

module.exports = showsRepository;
