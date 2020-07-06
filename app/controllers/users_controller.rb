# frozen_string_literal: true

class UsersController < ApplicationController
  wrap_parameters :user, include: [:name, :email, :password, :password_confirmation]

  def new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      flash.notice = "アカウントを作成しました。"
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
end
