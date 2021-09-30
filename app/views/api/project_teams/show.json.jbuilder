@members.each do |member|
  json.set! member.id do
    json.extract! member, :id, :email, :username, :first_name, :last_name
  end
end