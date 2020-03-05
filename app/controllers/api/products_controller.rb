class Api::ProductsController < ApplicationController
    
    before_action :require_login, only: [:create, :update, :destroy]

    def index
        @products = Product.all

        render :index
    end

    def show
        @product = Product.find(params[:id])

        render :show
    end

    def create

        @product = Product.new(product_params)

        if @product.save
            render :show
        else
            render json: @product.errors.full_messages, status: 422
        end

    end

    def update

        @product = Product.find(params[:id])

        if @product.update(product_params)
            render :show
        else
            render json: @product.errors.full_messages, status: 422
        end

    end

    def destroy

        @product = Product.find(params[:id])

        if @product.destroy
            render :show
        else
            render json: @product.errors.full_messages, status: 422
        end

    end

    private

    def product_params
        params.require(:product).permit(:product_name, :desc, :price, :vendor_id)
    end
     
end