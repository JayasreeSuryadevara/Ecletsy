# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#  
# Seed Data for a demo user
User.destroy_all
Product.destroy_all

# Seeds for users and users mapped as vendors 
user1=User.create!(username: 'Demo User',password: 'password',email:"demo_user@text.com", address:"99 Street, Nine city, CA, 99999")
user2=User.create!(username: 'Jaya',password: 'password',email:"jaya@test.com", address:"address test 2")
user3=User.create!(username: '11600-admin',password: 'password',email:"11600-admin@test.com", address:"address test 3")
user4=User.create!(username: 'MPS-admin',password: 'password',email:"MPS-admin@test.com", address:"address test 3")
user5=User.create!(username: 'Owner Craft',password: 'password',email:"CraftJewelery-admin@test.com", address:"address test 3")
user6=User.create!(username: 'Entreprenuer1',password: 'password',email:"Entreprenuer1@test.com", address:"address test 3")
user7=User.create!(username: 'Entreprenuer2',password: 'password',email:"Entreprenuer2@test.com", address:"address test 3")

# Seeds for products 
product1=Product.create!(product_name: 'Linen Tea Towel',price: '12.82',desc: 'Linen Dish Towel Towel with Hook')
product2=Product.create!(product_name: 'OLA Mug',price: '77.00',desc: 'Handmade Mugs with distinct patterns')
product3=Product.create!(product_name: 'Floating Shelf',price: '10.50',desc: 'Heavy Duty Open Shelving, Farmhouse Style')
product4=Product.create!(product_name: 'Personalised101',price: '33.90',desc: 'Personalised Pressed Flower Necklace')
product5=Product.create!(product_name: 'Zodiac Ring',price: '49.00',desc: 'Zodiac Constellation Ring')
product6=Product.create!(product_name: 'MPSPrint2',price: '30.00',desc: 'Women March On Print')
product7=Product.create!(product_name: 'NameLeatherChain',price: '5.95',desc: 'Personalized Leather Keychain')
product8=Product.create!(product_name: 'OutdoorPillow1',price: '8.00',desc: 'Beige gray red Pillow case')

# vendors who own the products