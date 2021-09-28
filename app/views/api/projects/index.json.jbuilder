json.projects do
  @teams.each do |team|
    json.set! team.id do
      json.partial! 'project', project: team.project
    end
  end
end
