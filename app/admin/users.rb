# Export to CSV with the referrer_id
ActiveAdmin.register User do

  batch_action :destroy do |ids|
    User.find(ids).each do |user|
      user.destroy
    end
    redirect_to collection_path
  end

  csv do
    column :id
    column :email
    column :referral_code
    column :referrer_id
    column :created_at
    column :updated_at
  end

  actions :index, :show
end
