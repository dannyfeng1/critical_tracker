# README
![image](https://user-images.githubusercontent.com/86497399/136598175-90baa2b1-b077-49fe-bd25-7d6efeb630ed.png)

<h2>
Critical Tracker is a clone of <a href="https://www.pivotaltracker.com/">Pivotal Tracker</a>, a project management tool tailored towards the principles of AGILE development. Critical Tracker offers users the ability to create projects, assemble teams and create stories to aid them in their software development lifecycles. Try out <a href="https://critical-tracker.herokuapp.com/">Critical Tracker</a>!
</h2>

## Technologies
BackEnd | Frontend
---|:--
Ruby on Rails | React
PostgreSQL | Redux
jbuilder | JavaScript ES6

## Key Features

### User Authentication
* Users can sign up with a unique email and username.
* Users can login and retain login sessions.

### Dashboard/Projects
![image](https://user-images.githubusercontent.com/86497399/136598781-13061da0-952a-4837-be2f-02545343c1b8.png)
* Users can create projects in the dashboard.
* Dashboard displays all of the user's created projects and the projects they are a member of.
* Users can invite new team members by username in the members tab on the project display page.
* Users can edit project title/description through the information tab if they are the project owner.

### Stories
![image](https://user-images.githubusercontent.com/86497399/136598951-4197d75d-2e64-4613-9385-e76e6a563cc2.png)
* Stories should filter themselves.
* Users can create stories.
* Users can assign stories to team members.
* Users can accept stories that have not been assigned.
* Once accepted, users can mark stories as started or finished as they work on them.
* Users can edit and delete their own stories
```
  def update
    @story = Story.find_by(id: params[:story][:id])
    if @story.update(story_params)
      assigned_user = User.find_by(username: params[:story][:assign_to])
      @story.story_assigned.destroy if @story.story_assigned  
      AssignedStory.create(assigned_user_id: assigned_user.id, story_id: @story.id) if assigned_user
      render :show
    else
      render json: @story.errors.full_messages, status: 422
    end
  end
```
Updating a story with a new user assignment would destroy the old one if present and create a new assignment relation between a story and a user.

### Future Directions
* Drag and drop prioritization.
* Live refresh for responsive team environment.
