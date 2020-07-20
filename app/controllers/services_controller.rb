# frozen_string_literal: true

class ServicesController < ApplicationController
  before_action :load_service, only: %i(edit update destroy)

  def index
    @services = current_user.services.all
    respond_to do |format|
      format.json { render json: @services.map { |service| service.as_json.merge(next_renewed_on: service.next_renewed_on) } }
    end
  end

  def new
  end

  def create
    @service = current_user.services.build(service_params)
    if @service.save
      flash.notice = "サービスを登録しました。"
      head :ok
    else
      respond_to do |format|
        format.json { render json: @service.errors.full_messages, status: 422 }
      end
    end
  end

  def edit
    respond_to do |format|
      format.html
      format.json { render json: @service }
    end
  end

  def update
    if @service.update(service_params)
      flash.notice = "サービスを修正しました。"
      head :ok
    else
      respond_to do |format|
        format.json { render json: @service.errors.full_messages, status: 422 }
      end
    end
  end

  def destroy
    if @service.destroy
      head :ok
    end
  end

  private
    def service_params
      params.require(:service).permit(
        :name,
        :description,
        :plan,
        :price,
        :renewed_on,
        :remind_on,
      )
    end

    def load_service
      @service = current_user.services.find(params[:id])
    end
end
