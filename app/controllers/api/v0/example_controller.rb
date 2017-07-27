class Api::V0::ExampleController < ApiController
  def index
    @example = Random.rand(5)
    render json: @example.to_json
  end
end
