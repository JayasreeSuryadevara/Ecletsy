@vendors.each do |vendor|
  json.set! vendor.id do
    json.partial! "vendor", vendor: vendor    
  end
end