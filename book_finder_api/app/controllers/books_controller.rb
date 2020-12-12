# frozen_string_literal: true

class BooksController < ActionController::API
  def index
    response = GoogleBooks.search(search_params)

    render json: response.body
  end

  private

  def search_params
    params.permit(:search_term)
  end
end
