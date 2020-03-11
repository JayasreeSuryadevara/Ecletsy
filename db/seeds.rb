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
Vendor.destroy_all

# Seeds for users and users mapped as vendors 
user1=User.create!(username: 'Demo User',password: 'password',email:"demo_user@test.com", address:"99 Street, Nine city, CA, 99999")
user2=User.create!(username: 'Jaya',password: 'password',email:"jaya@test.com", address:"address test 2")
user3=User.create!(username: '11600-admin',password: 'password',email:"11600-admin@test.com", address:"address test 3")
user4=User.create!(username: 'MPS-admin',password: 'password',email:"MPS-admin@test.com", address:"address test 3")
user5=User.create!(username: 'Owner Craft',password: 'password',email:"CraftJewelery-admin@test.com", address:"address test 3")
user6=User.create!(username: 'Entreprenuer1',password: 'password',email:"Entreprenuer1@test.com", address:"address test 3")
user7=User.create!(username: 'Entreprenuer2',password: 'password',email:"Entreprenuer2@test.com", address:"address test 3")

# vendors who own the products
vendor1=Vendor.create!(vendor_name: 'ELEVEN600',owner_id: user3.id)
vendor2=Vendor.create!(vendor_name: 'Crafty Jewelry',owner_id: user6.id)
vendor3=Vendor.create!(vendor_name: 'MP Studio',owner_id: user4.id)
vendor4=Vendor.create!(vendor_name: 'Supplies', owner_id: user2.id)
vendor5=Vendor.create!(vendor_name: 'Demo Store', owner_id: user1.id)

# Seeds for products 
product1=Product.create!(product_name: 'Linen Tea Towel',price: '12.82',desc: 'Linen Dish Towel - Towel with Hook',vendor_id: vendor1.id)
product2=Product.create!(product_name: 'OLA Mug',price: '77.00',desc: 'Handmade Mugs with distinct patterns',vendor_id: vendor1.id)
product3=Product.create!(product_name: 'Floating Shelf',price: '10.50',desc: 'Heavy Duty Open Shelving, Farmhouse Style',vendor_id: vendor1.id)
product4=Product.create!(product_name: 'Personalised101',price: '33.90',desc: 'Personalised Pressed Flower Necklace',vendor_id: vendor2.id)
product5=Product.create!(product_name: 'Zodiac Ring',price: '49.00',desc: 'Zodiac Constellation Ring',vendor_id: vendor2.id)
product6=Product.create!(product_name: 'MPSPrint2',price: '30.00',desc: 'Women March On Print',vendor_id: vendor3.id)
product7=Product.create!(product_name: 'NameLeatherChain',price: '5.95',desc: 'Personalized Leather Keychain',vendor_id: vendor2.id)
product8=Product.create!(product_name: 'OutdoorPillow1',price: '8.00',desc: 'Beige gray red Pillow case',vendor_id: vendor1.id)

# Attaching images for the products from AWS bucket
# file1 = File.open('s3://ecletsy-pro/product1-img.jpg')
# product1.photo.attach(io: file1, filename: 'product1-img.jpg')

product1.photo.attach(io: File.open("app/assets/images/product1-img.jpg"), filename: 'product1-img.jpg')
product2.photo.attach(io: File.open("app/assets/images/product2-img.jpg"), filename: 'product2-img.jpg')
product3.photo.attach(io: File.open("app/assets/images/product3-img.jpg"), filename: 'product3-img.jpg')
product4.photo.attach(io: File.open("app/assets/images/product4-img.jpg"), filename: 'product4-img.jpg')
product5.photo.attach(io: File.open("app/assets/images/product5-img.jpg"), filename: 'product5-img.jpg')
product6.photo.attach(io: File.open("app/assets/images/product6-img.jpg"), filename: 'product6-img.jpg')
product7.photo.attach(io: File.open("app/assets/images/product7-img.jpg"), filename: 'product7-img.jpg')
product8.photo.attach(io: File.open("app/assets/images/product8-img.jpg"), filename: 'product8-img.jpg')


# Attaching images to vendor
vendor1.photo.attach(io: File.open("app/assets/images/home-ideas-hpg-1.jpg"), filename: 'home-ideas-hpg-1.jpg')
vendor5.photo.attach(io: File.open("app/assets/images/DemoUserShop.jpg"), filename: 'DemoUserShop.jpg')
