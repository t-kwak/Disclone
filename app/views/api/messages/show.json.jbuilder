if @messageable.class == Dm
  json.directMessages do
    json.partial! 'api/dms/dm.json.jbuilder', dm: @messageable, messages: @messages.map{|message| message.id}
  end
else
  json.channels do
    json.partial! 'api/channels/channel.json.jbuilder', channel: @messageable, messages: @messages.map{|message| message.id}
  end
end

json.messages do
  @messages.each do |message|
    json.partial! 'api/messages/message.json.jbuilder', message: message
  end
end
