# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

10.times do

  Entry.create :name => Faker::Name.name,
    :number => Faker::PhoneNumber.phone_number,
    :email => Faker::Internet.email,
    :description => Faker::Company.catch_phrase

end
