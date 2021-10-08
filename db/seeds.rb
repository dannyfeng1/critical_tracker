# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
AssignedStory.destroy_all
Story.destroy_all
ProjectTeam.destroy_all
Project.destroy_all
User.destroy_all

demo_user = User.create(username: "Demo_User", email: "demouser@testing.io", password: "demo123", first_name: "Demo", last_name: "User")
demo_teammate = User.create(username: "Demo_Teammate", email: "demoteammate@testing.io", password: "demo123", first_name: "Demo", last_name: "Teammate")

crit_tracker = Project.create(title: "Critical Tracker", description: "First full stack project!", project_owner_id: demo_user.id)
demo_proj = Project.create(title: "Demo Project", description: "Test out app here!", project_owner_id: demo_user.id)

ProjectTeam.create(project_id: crit_tracker.id, user_id: demo_user.id)
ProjectTeam.create(project_id: demo_proj.id, user_id: demo_user.id)

ProjectTeam.create(project_id: crit_tracker.id, user_id: demo_teammate.id)

user_auth = Story.create(title: "Create user auth", 
  description: "Users should be able to sign up, sign in, and log out of application.", 
  story_type: "Feature", story_state: "Finished", 
  priority: true, points: 1, story_owner_id: demo_user.id, project_id: crit_tracker.id)
AssignedStory.create(assigned_user_id: demo_teammate.id, story_id: user_auth.id)


heroku = Story.create(title: "Host app on Heroku", 
  description: "Live site should be deployed without any issues.", 
  story_type: "Feature", story_state: "Finished", 
  priority: true, points: 1, story_owner_id: demo_teammate.id, project_id: crit_tracker.id)
  AssignedStory.create(assigned_user_id: demo_user.id, story_id: heroku.id)


projects = Story.create(title: "Create projects page", 
  description: "Users should be able to create projects and automatically be added to the project's team.", 
  story_type: "Feature", story_state: "Finished", 
  priority: true, points: 1, story_owner_id: demo_teammate.id, project_id: crit_tracker.id)
AssignedStory.create(assigned_user_id: demo_user.id, story_id: projects.id)

stories = Story.create(title: "Create story containers and forms", 
  description: "Each container should filter project stories and should update reducers on submission.", 
  story_type: "Feature", story_state: "Finished", 
  priority: true, points: 3, story_owner_id: demo_user.id, project_id: crit_tracker.id)
AssignedStory.create(assigned_user_id: demo_teammate.id, story_id: stories.id)

story_workflow = Story.create(title: "Story Work Flow", 
  description: "Stories should be able to be accepted, started, and finished by the current user.", 
  story_type: "Feature", story_state: "Finished", 
  priority: true, points: 2, story_owner_id: demo_teammate.id, project_id: crit_tracker.id)
AssignedStory.create(assigned_user_id: demo_user.id, story_id: story_workflow.id)

prioritization =  Story.create(title: "Drag and Drop Prioritization", 
  description: "Stories should be able to be reordered by the user dragging and dropping them.", 
  story_type: "Feature", story_state: "Started", 
  priority: true, points: 4, story_owner_id: demo_teammate.id, project_id: crit_tracker.id)
AssignedStory.create(assigned_user_id: demo_user.id, story_id: prioritization.id)

Story.create(title: "Loading icon modal", 
  description: "Create a modal that hides the page while components are mounting.", 
  story_type: "Chore", story_state: "Unstarted", 
  priority: true, points: 1, story_owner_id: demo_user.id, project_id: crit_tracker.id)

a = Story.create(title: "Project Search Bar", 
  description: "Small search bar on dashboard that filters by project name.", 
  story_type: "Feature", story_state: "Unstarted", 
  priority: false, points: 1, story_owner_id: demo_user.id, project_id: crit_tracker.id)

b = Story.create(title: "Change the font size", 
  description: "Find a better font for forms.", 
  story_type: "Chore", story_state: "Unstarted", 
  priority: false, points: 1, story_owner_id: demo_user.id, project_id: crit_tracker.id)

AssignedStory.create(assigned_user_id: demo_user.id, story_id: a.id)
AssignedStory.create(assigned_user_id: demo_user.id, story_id: b.id)

  
Story.create(title: "Errors Not Clearing", 
  description: "Errors should clear on dismount of forms.", 
  story_type: "Bug", story_state: "Finished", 
  priority: true, points: 1, story_owner_id: demo_teammate.id, project_id: crit_tracker.id)

Story.create(title: "Errors Not Clearing", 
  description: "Errors should clear on dismount of forms.", 
  story_type: "Bug", story_state: "Finished", 
  priority: true, points: 1, story_owner_id: demo_teammate.id, project_id: crit_tracker.id)

Story.create(title: "More Story Error Reducers", 
  description: "Errors for story creation and edit are appearing in all forms.", 
  story_type: "Bug", story_state: "Unstarted", 
  priority: true, points: 2, story_owner_id: demo_teammate.id, project_id: crit_tracker.id)

Story.create(title: "Round them corners", 
  description: "Application is too blocky. Please round buttons and containers", 
  story_type: "Chore", story_state: "Unstarted", 
  priority: false, points: 0, story_owner_id: demo_user.id, project_id: crit_tracker.id)