# frozen_string_literal: true

class MyAccountController < ApplicationController
  skip_before_action :require_login
  before_action :set_user, only: %i(update)

  wrap_parameters :user, include: [:name, :email, :password, :password_confirmation]

  def show
    if logged_in?
      respond_to do |format|
        format.json { render json: current_user, only: [:name] }
      end
    else
      head :no_content
    end
  end

  def edit
  end

  def update
    if @user.update(user_params)
      flash.notice = "ユーザー情報を変更しました。"
      head :ok
    else
      respond_to do |format|
        format.json { render json: @user.errors.full_messages, status: 422 }
      end
    end
  end

  private
    def user_params
      params.require(:user).permit(
        :name,
        :email,
        :password,
        :password_confirmation
      )
    end

    def set_user
      @user = current_user
    end
end
