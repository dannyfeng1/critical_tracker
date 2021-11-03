@teams.each do |team|
  json.set! team.project_id do
    json.partial! 'project', project: team.project
  end
end
