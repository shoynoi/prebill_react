# frozen_string_literal: true

class UserSessionsController < ApplicationController
  skip_before_action :require_login, except: :destroy

  def create
    @user = login(params[:email], params[:password])
    if @user
      flash.notice = "ログインしました。"
      head :ok
    else
      head :unauthorized
    end
  end

  def destroy
    logout
    flash.notice = "ログアウトしました。"
    head :ok
  end
end
