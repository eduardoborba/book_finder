# frozen_string_literal: true

class GoogleBooks
  def self.search(params = {})
    HTTParty.get(
      'https://www.googleapis.com/books/v1/volumes',
      query: {
        q: params[:search_term],
        maxResults: 15,
        key: Rails.application.credentials.google_api_key
      }
    )
  end
end
