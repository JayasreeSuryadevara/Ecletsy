class Api::CartItemsController < ApplicationController
    
    before_action :require_logged_in, only: [:create, :update, :destroy]

    def index
        if current_user
            @cart_items = current_user.cart.cart_items
        else
            @cart_items = []
        end
        render :index
    end
    
    def create

        @cart_item = CartItem.new(cart_item_params)

        if  @cart_item.save
            render :show
        else
            render json:  @cart_item.errors.full_messages, status: 422
        end

    end

    def update

         @cart_item = CartItem.find(params[:id])

        if  @cart_item.update(cart_item_params)
            render :show
        else
            render json:  @cart_item.errors.full_messages, status: 422
        end

    end

    def destroy

         @cart_item = CartItem.find(params[:id])

        if  @cart_item.destroy
            render :show
        else
            render json:  @cart_item.errors.full_messages, status: 422
        end

    end

    private

    def cart_item_params
        params.require(:cart_item).permit(:product_id, :cart_id, :quantity)
    end
     
end