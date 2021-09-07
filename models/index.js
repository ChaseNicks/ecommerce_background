// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsto(Category, {
  foreignKey: "category_id",
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
})
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  though: {
    model: ProductTag,
    unique: false,
  },
  as: 'tag_id',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  though: {
    model: ProductTag,
    unique: false,
  },
  as: 'tagged_Products',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
