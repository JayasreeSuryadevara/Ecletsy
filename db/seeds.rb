# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#  
# Seed Data for a demo user
user1=User.create!(username: 'Demo User',password: 'password',email:"demo_user@text.com")
user1.profile_img.attach(io: File.open("/app/assets/images/"),filename:"user_icon.jpeg")

