class Api::VendorsController < ApplicationController

  before_action :require_logged_in, only: [:create, :update]

  def index
    @vendors = Vendor.all
    
    render :index
  end

  def show
    @vendor = Vendor.find(params[:id])

    render :show
  end
  
  def create

    @vendor = Vendor.new(vendor_params)

    if @vendor.save
      render "api/vendors/show"
    else
      render json: ["Something went wrong"], status: 422
    end

  end

  def update

    @vendor = Vendor.find(params[:id])

    if @vendor.update(vendor_params)
      render :show
    else
      render json: @vendor.errors.full_messages, status: 422
    end

  end

  private

  def vendor_params
    params.require(:vendor).permit( :id, :vendor_name, :owner_id)
  end

end