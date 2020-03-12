class Api::ShoppingCartsController < ApplicationController
    
    before_action :require_logged_in, only: [:create, :update, :destroy]

    def show
        if current_user
            @cart = current_user.cart
        else
            @cart = nil
        end
        render :show
    end

    def create

        @cart = ShoppingCart.new(cart_params)
        @cart.user_id = current_user.id
        if  @cart.save
            render :show
        else
            render json:  @cart.errors.full_messages, status: 422
        end

    end

    def update

         @cart = ShoppingCart.find(params[:id])

        if  @cart.update(cart_params)
            render :show
        else
            render json:  @cart.errors.full_messages, status: 422
        end

    end

    def destroy

         @cart = ShoppingCart.find(params[:id])

        if  @cart.destroy
            render :show
        else
            render json:  @cart.errors.full_messages, status: 422
        end

    end

    private

    def cart_params
        params.require(:shopping_cart).permit(:resolved)
    end
     
end