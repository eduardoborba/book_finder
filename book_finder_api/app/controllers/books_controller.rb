# frozen_string_literal: true

class BooksController < ActionController::API
  def index
    Rails.cache.fetch("books_index_v0/query: #{search_params[:search_param]}", expires_in: 1.hours) do
      response = GoogleBooks.search(search_params)

      render json: response.body
    end
  end

  private

  def search_params
    params.permit(:search_term)
  end
end
