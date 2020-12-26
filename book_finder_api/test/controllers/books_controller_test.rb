# frozen_string_literal: true

require 'test_helper'

class BooksControllerTest < ActionDispatch::IntegrationTest
  test '#index' do
    VCR.use_cassette('get_books_react') do
      get '/books', params: { search_term: 'react' }
    end

    assert_response :success

    response_json = JSON.parse(@response.body)
    assert_equal 15, response_json['items'].size
  end
end
