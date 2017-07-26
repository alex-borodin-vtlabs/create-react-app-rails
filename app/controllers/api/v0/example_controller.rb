class Api::V0::ExampleController < ApiController
  def index
    @example = true
    render json: @example.to_json
  end
end
