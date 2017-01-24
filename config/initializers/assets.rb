Rails.application.config.assets.precompile += %w( active_admin.css application.css )
Rails.application.config.assets.precompile << /\.(?:svg|eot|woff|ttf)\z/
