class Api::V1::ExampleController < ApiController
  def index
    @example = (params[:example] == "true") ? false : true
    render json: @example.to_json
  end
end
