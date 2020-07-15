# frozen_string_literal: true

class UserMailer < ApplicationMailer
  def renew_services(user, services)
    @user = user
    @services = services
    mail(to: user.email,
         subject: "PreBill 登録されたサービスが更新されました。")
  end

  def remind_services(user, services)
    @user = user
    @services = services
    mail(to: user.email,
         subject: "PreBill サービス更新のリマインド")
  end
end
