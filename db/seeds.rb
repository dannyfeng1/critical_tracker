# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: "DemoUser", email: "demouser@testing.io", password: "demo123", first_name: "Demo", last_name: "User")

Project.create(title: "Critical Tracker", description: "First full stack project!", project_owner_id: 1)
Project.create(title: "Demo Project", description: "Test out app here!", project_owner_id: 1)

ProjectTeam.create(project_id: 1, user_id: 1)
ProjectTeam.create(project_id: 2, user_id: 1)
