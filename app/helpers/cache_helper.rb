module CacheHelper
  def get_twits_from_cache
    twits = $redis.get('twits')
    if twits.nil?
      twits = Twit.all.reverse.to_json
      $redis.set('twits', twits)
    end
    @twits = JSON.load twits
  end
  
  def update_twits_in_cache
    $redis.set('twits', Twit.all.reverse.to_json)
  end
end
