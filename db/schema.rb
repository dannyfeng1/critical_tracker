# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_11_02_032542) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "assigned_stories", force: :cascade do |t|
    t.integer "assigned_user_id", null: false
    t.integer "story_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["assigned_user_id"], name: "index_assigned_stories_on_assigned_user_id"
    t.index ["story_id"], name: "index_assigned_stories_on_story_id"
  end

  create_table "project_orders", force: :cascade do |t|
    t.integer "project_id", null: false
    t.text "backlog", default: [], array: true
    t.text "icebox", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "project_teams", force: :cascade do |t|
    t.integer "project_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id", "user_id"], name: "index_project_teams_on_project_id_and_user_id", unique: true
    t.index ["project_id"], name: "index_project_teams_on_project_id"
    t.index ["user_id"], name: "index_project_teams_on_user_id"
  end

  create_table "projects", force: :cascade do |t|
    t.string "title", null: false
    t.string "description"
    t.integer "project_owner_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_owner_id"], name: "index_projects_on_project_owner_id"
  end

  create_table "stories", force: :cascade do |t|
    t.string "title", null: false
    t.string "description"
    t.string "story_type", null: false
    t.string "story_state", null: false
    t.boolean "priority", null: false
    t.integer "points"
    t.integer "story_owner_id", null: false
    t.integer "project_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_stories_on_project_id"
    t.index ["story_owner_id"], name: "index_stories_on_story_owner_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "username", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "session_token"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
